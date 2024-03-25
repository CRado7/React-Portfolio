export default function Contact() {
  return (
      <section>
          <h1 class="title">Contact</h1>
          <form>
              <div id="name">
                  <label htmlFor="name" className="form-label">
                      Name
                  </label>
                  <input
                      type="text" required
                      className="form-control"
                      id="name"
                      placeholder="Name"
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
                      placeholder="johndoe@email.com"
                  />
              </div>
              <div id="message">
              <label htmlFor="message" className="form-label">
                      Write Something Cool
                  </label>
                  <input
                      type="text" required
                      className="form-control"
                      id="message"
                      placeholder=""
                  />
              </div>
              <button action="mailto:christopher.ferraro34@gmail.com" type="submit" id="submit" className="btn btn-primary">
                  Submit
              </button>
          </form>
      </section>
  );
}
