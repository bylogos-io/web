import React, { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';

const evaluateMDX = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

export const MDXContent = ({
	code,
	components,
}: {
	code: string;
	components?: any;
}) => {
	const MDXComponent = useMemo(() => evaluateMDX(code), [code]);
	return React.createElement(MDXComponent, { components });
};
