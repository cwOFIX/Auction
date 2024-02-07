 // Function to handle image preview
    function previewImage(event) {
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function(){
            var dataURL = reader.result;
            $('#imagePreview').attr('src', dataURL);
            $('#imagePreviewContainer').show();
        };
        reader.readAsDataURL(input.files[0]);
    }

    // Function to enable editing of input fields
    function enableEdit(field) {
        var inputField = document.getElementById(field);
        inputField.disabled = !inputField.disabled;
        inputField.focus();
    }

    // Event listener for form submission
    document.getElementById('profileForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var telegramInput = document.getElementById('telegram');
        var telefonInput = document.getElementById('telefon');
        var imageInput = document.getElementById('image');
        // You can add your logic here to update the user's profile data

        // For demonstration purposes, let's just alert the new values
        // alert('Name: ' + nameInput.value + '\nEmail: ' + emailInput.value + '\nTelegram: ' + telegramInput.value + '\nTelefon numb: ' + telefonInput.value + '\nImage: ' + imageInput.value);
    });