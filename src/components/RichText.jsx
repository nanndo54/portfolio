import parse from 'html-react-parser'

export default async function RichText({ children, as: Tag, className, ...props }) {
  console.log('🚀 | children:', children)
  const childrenElement = parse(
    Array.isArray(children) ? children.join('') : String(children)
  )

  return Tag ? (
    <Tag className={className} {...props}>
      {childrenElement}
    </Tag>
  ) : (
    childrenElement
  )
}
