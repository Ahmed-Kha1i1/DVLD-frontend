import InlineInput from "./InlineInput";

/* eslint-disable react/prop-types */
function Notes({ notes, setNotes }) {
  return (
    <InlineInput id="notes" label="Notes">
      <textarea
        id="notes"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </InlineInput>
  );
}

export default Notes;
