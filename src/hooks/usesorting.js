import { useState } from "react";

const useSorting = (data) => {
    const [field, setField] = useState("");
    const [direction, setDirection] = useState("asc");

    const setSortField = (fieldToSort) => {
        if (fieldToSort === field) {
            setDirection(direction === "asc" ? "desc" : "asc");
        } else {
            setField(fieldToSort);
        }
    };

    const sort = () => {
        if (!field) {
            return data;
        }
        const sortedData = [...data].sort((a, b) => {
            if (a[field] < b[field]) {
                return direction === "asc" ? -1 : 1;
            }
            if (a[field] > b[field]) {
                return direction === "asc" ? 1 : -1;
            }
            return 0;
        });
        return sortedData;
    };

    const sortedData = sort();

    return { data: sortedData, sortField: field, setSortField };
}

export default useSorting;