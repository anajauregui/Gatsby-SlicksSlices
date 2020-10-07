import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

// onchange will take the value => pass it to sanity - sanity will patch to itself for things like live uploading and either set or unset it
function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

// Intl.NumberFormat is built into the browser and a good tool to format money to the users locale
const formatMoney = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        // NOTE: ref will let sanity know that this is the actual imput where the changing of the value happens - the rest being UI
        ref={inputComponent}
      />
    </div>
  );
}

// This exposes a focus method for sanity to run
PriceInput.focus = function () {
  this._inputElement.focus();
};
