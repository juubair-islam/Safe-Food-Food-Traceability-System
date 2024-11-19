$(document).ready(function() {
    // Sample dummy data
    const crops = [
        { id: 1, name: "Rice", quantity: 1000, harvestDate: "2024-10-01", district: "Dhaka" },
        { id: 2, name: "Wheat", quantity: 1500, harvestDate: "2024-10-05", district: "Chittagong" },
        { id: 3, name: "Corn", quantity: 800, harvestDate: "2024-10-10", district: "Rajshahi" },
        { id: 4, name: "Potato", quantity: 2000, harvestDate: "2024-10-12", district: "Khulna" },
        { id: 5, name: "Carrot", quantity: 500, harvestDate: "2024-10-15", district: "Sylhet" },
    ];

    // Function to populate the table
    function populateTable() {
        const tableBody = $('#data-table tbody');
        crops.forEach(crop => {
            const row = `<tr>
                <td>${crop.id}</td>
                <td>${crop.name}</td>
                <td>${crop.quantity}</td>
                <td>${crop.harvestDate}</td>
                <td>${crop.district}</td>
            </tr>`;
            tableBody.append(row);
        });
    }

    // Call the function to populate the table
    populateTable();
});
$(document).ready(function() {
    const cropData = {
        rice: {
            temperature: [22, 23, 24, 25, 23, 22],
            humidity: [60, 62, 61, 63, 60, 59],
            storageTime: "6 months"
        },
        wheat: {
            temperature: [18, 19, 20, 19, 18, 17],
            humidity: [50, 55, 52, 53, 51, 50],
            storageTime: "8 months"
        },
        corn: {
            temperature: [20, 21, 22, 21, 20, 19],
            humidity: [70, 72, 68, 70, 71, 69],
            storageTime: "5 months"
        },
        potato: {
            temperature: [4, 5, 6, 5, 4, 3],
            humidity: [80, 78, 79, 82, 81, 80],
            storageTime: "4 months"
        },
        carrot: {
            temperature: [0, 1, 2, 1, 0, -1],
            humidity: [90, 92, 91, 89, 90, 88],
            storageTime: "5 months"
        }
    };

    // Initialize the chart variable
    let cropChart;

    // Function to render the chart
    function renderChart(crop) {
        const ctx = document.getElementById('cropChart').getContext('2d');
        
        // Clear the previous chart if it exists
        if (cropChart) {
            cropChart.destroy();
        }

        // Create a new chart
        cropChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: cropData[crop].temperature,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        fill: true
                    },
                    {
                        label: 'Humidity (%)',
                        data: cropData[crop].humidity,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Days'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Temperature / Humidity'
                        }
                    }
                }
            }
        });

        // Display storage time
        alert(`Storage time for ${crop}: ${cropData[crop].storageTime}`);
    }

    // Event listener for crop selection
    $('#cropSelect').on('change', function() {
        const selectedCrop = $(this).val();
        if (selectedCrop) {
            renderChart(selectedCrop);
        }
    });
});

$(document).ready(function() {
    const cropData = {
        rice: {
            temperature: [22, 23, 24, 25, 23, 22],
            humidity: [60, 62, 61, 63, 60, 59],
            storageTime: "6 months"
        },
        wheat: {
            temperature: [18, 19, 20, 19, 18, 17],
            humidity: [50, 55, 52, 53, 51, 50],
            storageTime: "8 months"
        },
        corn: {
            temperature: [20, 21, 22, 21, 20, 19],
            humidity: [70, 72, 68, 70, 71, 69],
            storageTime: "5 months"
        },
        potato: {
            temperature: [4, 5, 6, 5, 4, 3],
            humidity: [80, 78, 79, 82, 81, 80],
            storageTime: "4 months"
        },
        carrot: {
            temperature: [0, 1, 2, 1, 0, -1],
            humidity: [90, 92, 91, 89, 90, 88],
            storageTime: "5 months"
        }
    };

    let cropChart;
    const savedData = []; // Array to hold saved data

    function renderChart(crop) {
        const ctx = document.getElementById('cropChart').getContext('2d');
        if (cropChart) {
            cropChart.destroy();
        }

        cropChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: cropData[crop].temperature,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        fill: true
                    },
                    {
                        label: 'Humidity (%)',
                        data: cropData[crop].humidity,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Days'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Temperature / Humidity'
                        }
                    }
                }
            }
        });

        alert(`Storage time for ${crop}: ${cropData[crop].storageTime}`);
    }

    $('#cropSelect').on('change', function() {
        const selectedCrop = $(this).val();
        if (selectedCrop) {
            renderChart(selectedCrop);
        }
    });

    // Save data on button click
    $('#saveData').on('click', function() {
        const crop = $('#cropSelect').val();
        const quantity = $('#quantity').val();
        const harvestDate = $('#harvestDate').val();
        const harvestDistrict = $('#harvestDistrict').val();

        if (crop && quantity && harvestDate && harvestDistrict) {
            savedData.push({
                crop: crop,
                quantity: quantity,
                harvestDate: harvestDate,
                harvestDistrict: harvestDistrict
            });

            alert('Data saved successfully!');

            // Optionally, clear the input fields
            $('#quantity').val('');
            $('#harvestDate').val('');
            $('#harvestDistrict').val('');
        } else {
            alert('Please fill in all fields.');
        }
    });
});

function searchCrop() {
    const batchNumber = document.getElementById('batchNumber').value;
    if (batchNumber) {
      document.getElementById('cropDetails').style.display = 'block';
    }
  }
  
  function login() {
    const role = document.getElementById('userRole').value;
    const password = document.getElementById('password').value;
  
    // Passwords for each role
    const passwords = {
      "Processing Unit Manager": "pum123",
      "Supervisor": "supervisor123",
      "Government Officer": "govt123",
      "Cold-Storage In Charge": "coldstorage123",
      "Retailer": "retailer123"
    };
  
    // Role-specific pages
    const rolePages = {
      "Processing Unit Manager": "processing_unit_manager_dashboard.html",
      "Supervisor": "supervisor_dashboard.html",
      "Government Officer": "government_officer_dashboard.html",
      "Cold-Storage In Charge": "nutritionist_dashboard.html",
      "Retailer": "retailer_dashboard.html"
    };
  
    // Check if the entered password matches the selected role's password
    if (password === passwords[role]) {
      alert(`${role} logged in successfully! Redirecting...`);
      // Redirect to the role-specific page
      window.location.href = rolePages[role];
    } else {
      alert('Incorrect password. Please try again.');
    }
  }
  

  function toggleNav() {
    const sideNav = document.getElementById("sideNav");
    
    if (sideNav.style.width === "250px") {
      sideNav.style.width = "0";
    } else {
      sideNav.style.width = "250px";
    }
  }
  

  // Function to show crop details based on the selected crop
document.getElementById('crop').addEventListener('change', function() {
    const selectedCrop = this.value;
    const cropDetailsSection = document.getElementById('cropDetails');
    const cropData = document.getElementById('cropData');
  
    // Toggle visibility of crop details
    cropDetailsSection.style.display = 'block';
  
    // Clear existing crop data
    cropData.innerHTML = '';
  
    // Add dummy crop data based on selected crop
    if (selectedCrop === 'Rice') {
      cropData.innerHTML = `
        <tr>
          <td>28</td>
          <td>75</td>
          <td>90</td>
          <td>High</td>
        </tr>
        <tr>
          <td>30</td>
          <td>80</td>
          <td>80</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>25</td>
          <td>70</td>
          <td>100</td>
          <td>High</td>
        </tr>
      `;
    } else if (selectedCrop === 'Wheat') {
      cropData.innerHTML = `
        <tr>
          <td>25</td>
          <td>70</td>
          <td>75</td>
          <td>High</td>
        </tr>
        <tr>
          <td>26</td>
          <td>72</td>
          <td>80</td>
          <td>Medium</td>
        </tr>
      `;
    }
    // Add more crop data if necessary for other crops...
  });
  