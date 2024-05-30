import React from "react"
import { Flex } from "antd"

type Props = {}

const NotFoundPage = (props: Props) => {
	return (
		<Flex align="center" gap={4}>
			<h1>404</h1> <p>- Page Not Found</p>
		</Flex>
	)
}

export default NotFoundPage
