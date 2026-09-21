import { Save, Sparkles } from "lucide-react";
import { innovationCategories } from "../data/journeyData";
import { innovationFocusOptions } from "../data/innovationData";

function InnovationForm({
  innovation = {},
  onChange,
  onSubmit,
  submitLabel = "Save Innovation",
}) {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({
        ...innovation,
        [field]: value,
      });
    }
  };

  return (
    <form
      className="innovation-form"
      onSubmit={(event) => {
        event.preventDefault();

        if (onSubmit) {
          onSubmit(innovation);
        }
      }}
    >
      <div className="innovation-form-header">
        <div>
          <span className="section-eyebrow">
            START YOUR INNOVATION
          </span>

          <h2>Innovation Overview</h2>

          <p>
            Define your Ayurveda innovation before moving
            through knowledge, evidence and IP discovery.
          </p>
        </div>

        <div className="innovation-form-header-icon">
          <Sparkles size={20} />
        </div>
      </div>

      <div className="form-grid">
        <label className="form-field form-field-wide">
          <span>Innovation Name</span>

          <input
            type="text"
            value={innovation.title || ""}
            placeholder="Enter your innovation name"
            onChange={(event) =>
              updateField("title", event.target.value)
            }
            required
          />
        </label>

        <label className="form-field">
          <span>Innovation Category</span>

          <select
            value={innovation.category || ""}
            onChange={(event) =>
              updateField(
                "category",
                event.target.value
              )
            }
            required
          >
            <option value="">
              Select category
            </option>

            {innovationCategories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field">
          <span>Innovation Focus</span>

          <select
            value={innovation.focus || ""}
            onChange={(event) =>
              updateField(
                "focus",
                event.target.value
              )
            }
            required
          >
            <option value="">
              Select focus
            </option>

            {innovationFocusOptions.map((option) => (
              <option
                key={option.value}
                value={option.label}
              >
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field form-field-wide">
          <span>Innovation Description</span>

          <textarea
            rows="4"
            value={innovation.description || ""}
            placeholder="Describe what your innovation does..."
            onChange={(event) =>
              updateField(
                "description",
                event.target.value
              )
            }
          />
        </label>

        <label className="form-field form-field-wide">
          <span>Problem Statement</span>

          <textarea
            rows="4"
            value={innovation.problemStatement || ""}
            placeholder="What problem does the innovation address?"
            onChange={(event) =>
              updateField(
                "problemStatement",
                event.target.value
              )
            }
          />
        </label>

        <label className="form-field">
          <span>Therapeutic / Intended Use</span>

          <input
            type="text"
            value={innovation.therapeuticUse || ""}
            placeholder="e.g. digestive wellness"
            onChange={(event) =>
              updateField(
                "therapeuticUse",
                event.target.value
              )
            }
          />
        </label>

        <label className="form-field">
          <span>IPC / CPC Classification</span>

          <input
            type="text"
            value={
              innovation.ipcCodes?.join(", ") || ""
            }
            placeholder="e.g. A61K 36/00"
            onChange={(event) =>
              updateField(
                "ipcCodes",
                event.target.value
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean)
              )
            }
          />
        </label>

        <label className="form-field form-field-wide">
          <span>Ingredients / Components</span>

          <textarea
            rows="3"
            value={innovation.ingredients || ""}
            placeholder="List important ingredients or components..."
            onChange={(event) =>
              updateField(
                "ingredients",
                event.target.value
              )
            }
          />
        </label>

        <label className="form-field form-field-wide">
          <span>Formulation / Technical Details</span>

          <textarea
            rows="3"
            value={innovation.formulation || ""}
            placeholder="Describe the formulation or technical composition..."
            onChange={(event) =>
              updateField(
                "formulation",
                event.target.value
              )
            }
          />
        </label>

        <label className="form-field form-field-wide">
          <span>Preparation / Process</span>

          <textarea
            rows="3"
            value={innovation.process || ""}
            placeholder="Describe the preparation or technical process..."
            onChange={(event) =>
              updateField(
                "process",
                event.target.value
              )
            }
          />
        </label>

        <label className="form-field form-field-wide">
          <span>Expected Advantages</span>

          <textarea
            rows="3"
            value={innovation.advantages || ""}
            placeholder="What makes the innovation useful or different?"
            onChange={(event) =>
              updateField(
                "advantages",
                event.target.value
              )
            }
          />
        </label>
      </div>

      <div className="innovation-form-footer">
        <span>
          You can edit these details later as your
          innovation develops.
        </span>

        <button
          type="submit"
          className="primary-button"
        >
          <Save size={16} />
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

export default InnovationForm;