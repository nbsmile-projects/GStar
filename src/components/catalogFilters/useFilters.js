import { useDispatch } from "react-redux";

import { setLoading } from "./catalogFiltersSlice";

const useFilters = () => {
    const dispatch = useDispatch();

    const searchItem = (listOfItems, searchText) => {
        dispatch(setLoading(true));
        if (!searchText) {
            return listOfItems;
        }
        return listOfItems.filter(item => {
            return item.name.toLowerCase().includes(searchText.toLowerCase());
        })
    }

    const filterItems = (items, type) => {
        dispatch(setLoading(true));
        let itemsSorting = [...items];
        switch (type) {
            case "morePopular":
                return itemsSorting.sort((a, b) => b.sold - a.sold);
            case "newer":
                return itemsSorting.sort((a, b) => {
                    const firstPastDate = new Date(a.uploadDate);
                    const secondPastDate = new Date(b.uploadDate);

                    let currentDate = new Date();
                    currentDate.setHours(currentDate.getHours() + 6);

                    let timeDifferenceOfFirst = currentDate - firstPastDate;
                    let timeDifferenceOfSecond = currentDate - secondPastDate;

                    return timeDifferenceOfFirst - timeDifferenceOfSecond;
                });
            case "highToLow":
                return itemsSorting.sort((a, b) => b.price - a.price);
            case "lowToHigh":
                return itemsSorting.sort((a, b) => a.price - b.price);
            default:
                return itemsSorting;
        }
    }

    return { searchItem, filterItems };
}

export default useFilters;