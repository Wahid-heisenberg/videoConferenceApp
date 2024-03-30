export default function Page({ params }: { params: { id: string } }) {
    return <div>Meeting room: {params.id}</div>
  }