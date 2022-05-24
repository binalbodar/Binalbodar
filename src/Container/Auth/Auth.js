import React from 'react';
function Auth(props) {
    return (
<div>
  <section id="appointment" className="appointment">
    <div className="container">
      <div className="section-title">
        <h2>Make an Appointment</h2>
      </div>
      <form action method="post" role="form" className="php-email-form">
        <div className="row">
          <div className="col-md-4 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
        </div>
      </form>
    </div>
  </section>
</div>

    );
}

export default Auth;