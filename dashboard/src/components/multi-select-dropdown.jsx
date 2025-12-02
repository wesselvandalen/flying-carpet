export default function MultiSelectDropdown({
    label,
    items,
    selected,
    setSelected,
    isOpen,
    setIsOpen,
    toggleSelection,
}) {

    function isChecked(item) {
        for (let i = 0; i < selected.length; i++) {
            const selectedItem = selected[i];

            if (selectedItem.id === item.id) {
                return true
            } 
        }

        return false
    }

    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="w-full flex justify-between items-center bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
                >
                    {selected.length > 0
                        ? `${selected.length} selected`
                        : `Select ${label.toLowerCase()}`}
                    <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
                </button>

                {isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                        {items.length > 0 ?
                            <div className="p-2 space-y-2">
                                {items.map((item, index) => {
                                    return <label
                                        key={index}
                                        className="flex items-center space-x-2 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isChecked(item)}
                                            onChange={() =>
                                                setSelected((prev) => toggleSelection(prev, item))
                                            }
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span>{
                                            // https://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-specific-property-in-javascript
                                            Object.hasOwn(item, "name") ? item.name : item.title}</span>
                                    </label>
                                })}
                            </div>
                            :
                            <p className="p-2 space-y-2">There are no {label.toLowerCase()} found</p>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}