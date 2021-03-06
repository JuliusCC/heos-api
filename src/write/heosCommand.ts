import { HeosCommandAttribute } from '../types'

const prefix: string = 'heos://'
const postfix: string = '\r\n'

function attributeString(attributes?: HeosCommandAttribute): string {
	if (!attributes || Object.entries(attributes).length < 1) {
		return ''
	} else {
		return (
			'?' +
			Object.entries(attributes)
				.map(([key, value]) => `${key}=${value}`)
				.reduce((previous, current) => `${previous}&${current}`)
		)
	}
}

export function generateHeosCommand(
	commandGroup: string,
	command: string,
	attributes?: HeosCommandAttribute
): string {
	if (!commandGroup || !command) {
		throw new Error('Missing arguments when creating HeosCommand')
	}

	return [prefix, commandGroup, '/', command, attributeString(attributes), postfix].join('')
}
