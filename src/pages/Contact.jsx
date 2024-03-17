export default function Contact() {
    return (
        <section>
            <h1 id="contact">Drop A Line</h1>
            <form>
                <div id="name">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text" required
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                    />
                </div>
                <div id="email">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email" required
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div id="message">
                <label htmlFor="name" className="form-label">
                        White Something Cool
                    </label>
                    <input
                        type="text" required
                        className="form-control"
                        id="name"
                        placeholder=""
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
}