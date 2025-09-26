// declare module '*.scss' {
// 	type IClassNames = Record<string, string>
// 	const classNames: IClassNames
// 	export = classNames
// }

declare module "*.module.scss" {
	const classes: { [key: string]: string }
	export default classes
}

declare module "*.svg" {
	import { FC, SVGProps } from "react"
	const content: FC<SVGProps<SVGSVGElement>>
	export default content
}
