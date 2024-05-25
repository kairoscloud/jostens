const JostensTimer = setTimeout(JostensFunc, 5000);

function JostensFunc() {
  document.querySelector("#smartlists > div.hl_controls.hl_smartlists--controls > div.hl_controls--left").innerHTML = `
<div data-v-7c5302f9="" class="hl_controls--left">
<span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Add Contact">
    <button data-v-7c5302f9="" type="button" data-original-title="Add" class="btn btn-light btn-sm contactsloaded"><i data-v-7c5302f9="" class="icon icon-plus"></i></button>
</span>
<span data-v-7c5302f9="" class="bulk-actions-list">
    <span id="newspan1" data-v-07dca9cc="" data-tooltip="tooltip" data-placement="top" data-original-title="Add School Contact">
        <span id="newspan2" class="tooltip" style="display: none; position: absolute; top: 18.5%; left: 2%;"><span id="newspan3" class="tooltip-inner">Add School Contact</span></span>
        <button id="newbtn1" data-v-07dca9cc="" type="button" data-original-title="Add School Contact" class="btn btn-light btn-sm"><i id="newicon1" data-v-07dca9cc="" class="fas fa-school"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Pipeline Change" style="display: none;">
        <button data-v-7c5302f9="" type="button" data-original-title="Pipeline Modal" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="fa fa-filter"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Add to Automation">
        <button data-v-7c5302f9="" type="button" data-original-title="Campaign Selection Modal" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="fa fa-robot" style="font-size: 17px;"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Send SMS">
        <button data-v-7c5302f9="" type="button" data-original-title="Bulk SMS Modal" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon-sms-gray"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Send Email">
        <button data-v-7c5302f9="" type="button" data-original-title="Bulk Email Modal" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon-email-svg-gray"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Add Tag">
        <button data-v-7c5302f9="" type="button" data-original-title="Tag" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-tag-add"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Remove Tag">
        <button data-v-7c5302f9="" type="button" data-original-title="Tag" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-tag-delete"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Delete Contacts">
        <button data-v-7c5302f9="" type="button" data-original-title="Delete" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-trash"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Send Review Requests" style="display: none;">
        <button data-v-7c5302f9="" type="button" data-original-title="Review Request" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="fas fa-star"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Export Contacts">
        <button data-v-7c5302f9="" type="button" data-original-title="Export" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-download"></i></button>
    </span>
    <span data-v-7c5302f9="" data-tooltip="tooltip" data-placement="top" title="Import Contacts">
        <button data-v-7c5302f9="" type="button" data-original-title="Import" class="btn btn-light btn-sm"><i data-v-7c5302f9="" class="icon icon-share-1"></i></button>
    </span>
</span>
<div data-v-7c5302f9="" class="d-inline-block"><h3 data-v-7c5302f9="" class="mx-1" style="display: none;">* No items found for selected filters</h3></div>
</div>


    `;
}
