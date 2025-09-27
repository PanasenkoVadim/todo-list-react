import { useLayoutEffect, useRef, useState } from "react"

const useFixedPosition = (options: UseScrollLockOptions = {}): UseScrollLockReturn => {
  const IS_SERVER = typeof window === "undefined"

  const { autoLock, lockTarget, widthReflow } = options
  const [isLocked, setIsLocked] = useState(false)
  const target = useRef<HTMLElement | null>(null)
  const originalStyle = useRef<OriginalStyle | null>(null)

  const lock = () => {
    if (!target.current) return

    const { overflow, paddingRight } = target.current.style
    originalStyle.current = { overflow, paddingRight }

    if (widthReflow) {
      const offsetWidth = target.current === document.body ? window.innerWidth : target.current.offsetWidth
      const currentPaddingRight = parseInt(window.getComputedStyle(target.current).paddingRight, 10) || 0
      const scrollbarWidth = offsetWidth - target.current.scrollWidth

      target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`
    }

    target.current.style.overflow = "hidden"
    setIsLocked(true)
  }

  const unlock = () => {
    if (!target.current || !originalStyle.current) return

    target.current.style.overflow = originalStyle.current.overflow

    if (widthReflow) target.current.style.paddingRight = originalStyle.current.paddingRight

    setIsLocked(false)
  }

  useLayoutEffect(() => {
    if (IS_SERVER) return

    if (lockTarget) target.current = typeof lockTarget === "string" ? document.querySelector(lockTarget) : lockTarget

    if (!target.current) target.current = document.body

    if (autoLock) lock()

    return () => {
      unlock()
    }
  }, [autoLock, lockTarget, widthReflow])

  return { isLocked, lock, unlock }
}

export default useFixedPosition

type UseScrollLockOptions = {
  autoLock?: boolean
  lockTarget?: HTMLElement | string
  widthReflow?: boolean
}

type UseScrollLockReturn = {
  isLocked: boolean
  lock: () => void
  unlock: () => void
}

type OriginalStyle = {
  overflow: CSSStyleDeclaration["overflow"]
  paddingRight: CSSStyleDeclaration["paddingRight"]
}

/**
 * @param {UseScrollLockOptions} options Опции для управления блокировкой прокрутки
 * @param {boolean} [options.autoLock=false] Автоматически блокировать прокрутку при монтировании
 * @param {HTMLElement | string} [options.lockTarget=document.body] Целевой элемент для блокировки прокрутки
 * @param {boolean} [options.widthReflow=false] Учитывать ширину полосы прокрутки, чтобы избежать рефлоу
 *
 * @returns {UseScrollLockReturn} Объект, содержащий:
 * - isLocked: {boolean} Флаг, указывающий, заблокирована ли прокрутка
 * - lock: {Function} Функция для блокировки прокрутки
 * - unlock: {Function} Функция для разблокировки прокрутки
 *
 * Usage:
 * const Component = () => {
 *   const { isLocked, lock, unlock } = useFixedPosition({
 *     autoLock: true,
 *     widthReflow: true,
 *   });
 *
 *   return (
 *     <div>
 *       <p>Scroll is {isLocked ? "locked" : "unlocked"}</p>
 *       <button onClick={lock}>Lock Scroll</button>
 *       <button onClick={unlock}>Unlock Scroll</button>
 *     </div>
 *   );
 * }
 *
 * Примечания:
 * - Хук управляет блокировкой прокрутки на целевом элементе (по умолчанию — document.body).
 * - Если `widthReflow` включен, хук учитывает ширину полосы прокрутки, чтобы избежать визуального рефлоу.
 * - При размонтировании компонента прокрутка автоматически разблокируется.
 */
