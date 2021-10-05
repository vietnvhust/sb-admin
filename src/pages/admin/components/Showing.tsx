import React from "react";
type ShowingProp = {
  show: number;
  to: number;
  total: number
}
function Showing({show, to, total}: ShowingProp) {
  return (
    <div className="col-sm-12 col-md-5">
      <div
        className="dataTables_info"
        id="dataTable_info"
        role="status"
        aria-live="polite"
      >
        Showing {show} to {to} of {total} entries
      </div>
    </div>
  );
}

export default Showing;
