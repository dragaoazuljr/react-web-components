interface Props {
    title: string
}

function Child({title}: Props) {
  return (
    <h1>Child - {title}</h1>
  )
}

export default Child