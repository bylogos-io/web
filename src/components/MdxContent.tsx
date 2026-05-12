import React, { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';

// MDX compiled output from velite is a build-time-trusted function body.
// Not user input — safe to instantiate via Function constructor.
// biome-ignore lint/security/noGlobalEval: build-time-trusted MDX runtime
// react-doctor-disable-next-line react-doctor/no-eval
const evaluateMDX = (code: string) => {
	const FnCtor = Function as unknown as new (body: string) => (...args: unknown[]) => { default: unknown };
	const fn = new FnCtor(code);
	return fn({ ...runtime }).default;
};

export const MDXContent = ({
	code,
	components,
}: {
	code: string;
	components?: any;
}) => {
	const MDXComponent = useMemo(() => evaluateMDX(code), [code]) as any;
	return React.createElement(MDXComponent, { components });
};
