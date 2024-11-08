import InlineInput from "./InlineInput";

/* eslint-disable react/prop-types */
function Notes({ notes, setNotes, disabled }) {
  return (
    <InlineInput id="notes" label="Notes" disabled={disabled}>
      <textarea
        id="notes"
        placeholder="Notes"
        value={notes}
        className={`${disabled ? "disabled" : ""}`}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
    </InlineInput>
  );
}

export default Notes;
