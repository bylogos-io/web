import * as runtime from 'react/jsx-runtime'

const useMDX = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

export const MDXContent = ({ code, components }: { code: string, components?: any }) => {
  const Component = useMDX(code)
  return <Component components={components} />
}
