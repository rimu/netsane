// Saves options to chrome.storage
function save_options() {
  var facebook = document.getElementById('facebook').checked;
  var fox = document.getElementById('fox').checked;
  chrome.storage.sync.set({
    facebook: facebook,
    fox: fox
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    facebook: false,
    fox: false
  }, function(items) {
    document.getElementById('facebook').checked = items.facebook;
    document.getElementById('fox').checked = items.fox;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);