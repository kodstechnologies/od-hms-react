import React from "react";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onSendOrder,
  onDone,
  title = "Are you sure?",
  description = "Please confirm your action.",
  type = "info", // "success", "error", "warning", or "info"
  actions = [
    { label: "Cancel", onClick: onClose, variant: "outline-secondary" },
    { label: "Send Order", onClick: onSendOrder, variant: "info" },
    { label: "Done", onClick: onDone, variant: "success" },
  ],
}) => {
  if (!isOpen) return null;

  const typeStyles = {
    success: "text-success",
    error: "text-danger",
    warning: "text-warning",
    info: "text-primary",
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
      style={{ zIndex: 1050 }}
    >
      <div className="modal-dialog bg-light" role="document">
        <div className="modal-content p-4">
          <div className="modal-header mb-3">
            <h5 className={`modal-title ${typeStyles[type]}`}>{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body mb-4">
            <p>{description}</p>
          </div>
          <div className="modal-footer d-flex justify-content-end gap-2">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`btn ${
                  action.variant ? `btn-${action.variant}` : "btn-primary"
                }`}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
