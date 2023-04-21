import { Input } from "antd"

export default function Header( {setItemList, setLoading}) {

    const handleAdd = async (vaule) => {

        if(vaule.length < 3) return

        setLoading(true) // turn on spinner

        const newItem = {
            done: false,
            userId: "me",
            item: vaule //WHAT THE USER typed in is "vaule"
        }

        const response = await fetch('https://much-todo-api-c10.web.app/items', { //when we fetch we have to put this into the fetch request (make sure to check spelling and capitilization , we set JSON in the api only use when doinf a PATCH OR POST)
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem),

        })
        const data = await response.json()
        setItemList(data)
        setLoading(false)

    }
    return(
        <header>
            <Input.Search 
            allowClear
            enterButton="Add"
            size="large"
            onSearch={handleAdd}
            placeholder="Add new todo item"/>
        </header>
    )
}