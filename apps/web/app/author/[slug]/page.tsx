export default async function Page({ params }: { params: { slug: string } }) {
    return (
        <div >
            <h1>Welcome to {params.slug} page!</h1>
        </div>
    )
}