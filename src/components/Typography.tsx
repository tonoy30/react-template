import { CSS, styled } from '@src/stitches.config';
import { PropsWithChildren } from 'react';

const Text = styled('span', {
	color: '$grey900',
	fontWeight: '$fontWeights$normal',
	fontSize: '$sizes$16',
	wordBreak: 'break-word',

	variants: {
		variant: {
			h1: {
				fontSize: '$sizes$50',
				fontWeight: '$fontWeights$extrabold',
				lineHeight: '$sizes$65',
			},
			h2: {
				fontSize: '$sizes$40',
				fontWeight: '$fontWeights$bold',
				lineHeight: '$sizes$50',
			},
			h3: {
				fontSize: '$sizes$34',
				fontWeight: '$fontWeights$bold',
				lineHeight: '$sizes$45',
			},
			h4: {
				fontSize: '$sizes$24',
				fontWeight: '$fontWeights$bold',
				lineHeight: '$sizes$35',
			},
			h5: {
				fontSize: '$sizes$22',
				fontWeight: '$fontWeights$bold',
				lineHeight: '$sizes$30',
			},
			h6: {
				fontSize: '$sizes$18',
				fontWeight: '$fontWeights$bold',
				lineHeight: '$sizes$h6',
			},
			h7: {
				fontSize: '$sizes$16',
				fontWeight: '$fontWeights$bold',
				lineHeight: '$sizes$20',
			},
		},

		fontWeight: {
			extrathin: {
				fontWeight: '$extrathin',
			},
			thin: {
				fontWeight: '$thin',
			},
			light: {
				fontWeight: '$light',
			},
			normal: {
				fontWeight: '$normal',
			},
			medium: {
				fontWeight: '$medium',
			},
			semibold: {
				fontWeight: '$semibold',
			},
			bold: {
				fontWeight: '$bold',
			},
			extrabold: {
				fontWeight: '$extrabold',
			},
			dark: {
				fontWeight: '$dark',
			},
		},

		showEllipsis: {
			true: {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			},
			false: {},
		},

		lineClamp: {
			true: {
				display: '-webkit-box',
				WebkitBoxOrient: 'vertical',
				whiteSpace: 'pre-line',
			},
			false: {},
		},

		spread: {
			true: {
				wordSpacing: '0.0625rem',
				letterSpacing: '0.0225rem',
			},
			false: {},
		},
	},
});

type Props = {
	ellipsis?: number | string;
	clamp?: number;
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
	light?: boolean;
	medium?: boolean;
	align?: 'start' | 'end' | 'center' | 'normal';
	spread?: boolean;
	color?: string;
	weight?:
		| 'extrathin'
		| 'thin'
		| 'light'
		| 'normal'
		| 'medium'
		| 'semibold'
		| 'bold'
		| 'extrabold'
		| 'dark';
	css?: CSS;
	as?: string;
};

const Typography = ({
	ellipsis,
	clamp,
	variant,
	color,
	weight,
	...props
}: PropsWithChildren<Props>) => {
	const css: CSS = {};
	if (ellipsis) {
		css.width = ellipsis;
	}
	if (clamp) {
		css.WebkitLineClamp = clamp;
	}

	return (
		<Text
			{...props}
			variant={variant}
			showEllipsis={ellipsis !== undefined || clamp !== undefined}
			lineClamp={clamp !== undefined}
			css={{
				...css,
				color: color ? `${color} !important` : undefined,
				fontWeight: weight ? `$${weight} !important` : undefined,
				textAlign: props.align ? props.align : 'normal',
				...props.css,
			}}
		/>
	);
};

export { Typography };
