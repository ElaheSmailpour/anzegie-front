

const TopHeader = () => {
    const isLogin=localStorage.getItem("userToken")
    return (
        <div>
        {isLogin && <p> {localStorage.getItem("name")}</p>}
        </div>
    )
}


export default TopHeader