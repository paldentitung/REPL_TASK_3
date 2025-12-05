const createEditFormTemplate = (book) => /*html */ `
          <form hx-put="/books/${book.id}" hx-swap="outerHTML" hx-target="closest li">
            <input 
              id="title" 
              name="title"
              placeholder="title" 
              type="text" 
              required
              value="${book.title}"
            />
            <input 
              id="author" 
              name="author"
              placeholder="author" 
              type="text" 
              required
              value="${book.author}"

            />
            <button>Update</button>
          </form>
`;
export default createEditFormTemplate;
