const defaultDate = "January 1, 1970";
function Article({ title, date,preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date || defaultDate}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;