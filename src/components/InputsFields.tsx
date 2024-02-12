const InputsFields = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
    };


    return (
        <main>
        <form action="" className="form__inputs" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" />
            <label htmlFor="price">Price</label>
            <input name="price" type="number" />
            <button>Save</button>
            <button>Cansel</button>
        </form>
        </main>
    )
}
export default InputsFields;