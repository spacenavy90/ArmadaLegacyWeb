import { FilteredTable } from '@/components/filtered-table'

type Plug = 'sw'

export default function ResourcePage({ params }: { params: { plug: Plug } }) {
    return (
        <main className="h-full w-full px-2 overflow-y-auto flex justify-center">
            <FilteredTable plug={params.plug} />
        </main>
    )
}