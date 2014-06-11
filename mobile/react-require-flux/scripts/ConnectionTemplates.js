define(['React'], function (React) {
  'use strict';

  console.log('Templates');
  var templates = {

    person: (
      <div>
        <div>
          <h4>
            {this.props.connection.lastName} {this.props.connection.firstName}
          </h4>
        </div>
        <div>
          <img src={this.props.connection.pictureUrl || ''} />
        </div>
        <div>
          <span>
            {
              !!this.props.connection.positions && !!this.props.connection.positions.values ? 
              this.props.connection.positions.values[0].title : ''
            }
          </span>
        </div>
        <div>
          <span>
            {
              !!this.props.connection.positions && 
              !!this.props.connection.positions.values && 
              !!this.props.connection.positions.values[0].startDate ? 
              this.props.connection.positions.values[0].startDate.month + '.' + 
              this.props.connection.positions.values[0].startDate.year : ''
            }
           </span>
        </div>
        <div>
          <span>
            {
              !!this.props.connection.positions && !!this.props.connection.positions.values ? 
              this.props.connection.positions.values[0].company.connection : ''
            }
          </span>
        </div>
        <div>
          <span>
            {
              !!this.props.connection.positions && !!this.props.connection.positions.values ? 
              this.props.connection.positions.values[0].company.size : ''
            }
          </span>
        </div>
        <div>
          <span>
            {
              !!this.props.connection.positions && !!this.props.connection.positions.values ? 
              this.props.connection.positions.values[0].company.industry : ''
            }
          </span>
        </div>
        <div>
          <span>
            {
              !!this.props.connection.location ? this.props.connection.location.name : ''
            }
          </span>
        </div>
      </div>
    )
  };

  return templates;
});