export function SearchInput({ value, onChange }: { value: string; onChange: (val: string) => void }) {
    return (
        <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border rounded px-3 py-2 mb-4 w-full"
        />
    )
}