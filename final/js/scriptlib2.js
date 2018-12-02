$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/app8ZPDjx29AQpl6m/K-Pop%20Groups?api_key=keyHwnj1ElCshCfmN&sortField";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.GroupName);
                       items.push(value.fields.Sex);
                       items.push(value.fields.DebutYear);
                       items.push(value.fields.EntertainmentAgency);
                       items.push(value.fields.AlbumSaleGaon);
                       items.push(value.fields.DigitalIndexGaon);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Group Name",
                       defaultContent:""},
                     { title: "Sex",
                         defaultContent:"" },
                     { title: "Debut Year",
                       defaultContent:"" },
                     { title: "Entertainment Agency",
                       defaultContent:""},
                     { title: "Album Sale Gaon",
                         defaultContent:""},
                     { title: "Digital Index Gaon",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

     $("button#roll_up").click(function() {
       var table1_items = [];
       var i = 0;
       var airtable_read_endpoint = "https://api.airtable.com/v0/app8ZPDjx29AQpl6m/K-Pop%20Groups?api_key=keyHwnj1ElCshCfmN&sortField";
       var table1_dataSet = [];
       $.getJSON(airtable_read_endpoint, function(result) {
              $.each(result.records, function(key,value) {
                  table1_items = [];
                      table1_items.push(value.fields.GroupName);
                      table1_items.push(value.fields.Sex);
                      table1_items.push(value.fields.DebutYear);
                      table1_items.push(value.fields.EntertainmentAgency);
                      table1_items.push(value.fields.AlbumSaleGaon);
                      table1_items.push(value.fields.DigitalIndexGaon);
                      table1_dataSet.push(table1_items);
                      console.log(table1_items);
               }); // end .each
               console.log(table1_dataSet);

            $('#table1').DataTable( {
                data: table1_dataSet,
                retrieve: true,
                columns: [
                  { title: "Group Name",
                    defaultContent:""},
                  { title: "Sex",
                      defaultContent:"" },
                  { title: "Debut Year",
                    defaultContent:"" },
                  { title: "Entertainment Agency",
                    defaultContent:""},
                  { title: "Album Sale Gaon",
                      defaultContent:""},
                  { title: "Digital Index Gaon",
                    defaultContent:""},
                ]
            } );
       }); // end .getJSON

         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/app8ZPDjx29AQpl6m/K-Pop%20Groups?api_key=keyHwnj1ElCshCfmN&view=Grid%20view";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.Name);
                        table2_items.push(value.fields.Total_Entries);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);
                $('#table2').DataTable( {
                    data: table2_dataSet,
                    retrieve: true,
                    ordering: false,
                    columns: [
                        { title: "Name",
                          defaultContent:""},
                        { title: "Total Entries",
                          defaultContent:""},
                    ] // rmf columns
                } ); // end dataTable

                var chart = c3.generate({
                     data: {
                         columns: table2_dataSet,
                         type : 'bar'
                     },
                     axis: {
                       x: {label: 'Stage'},
                       y: {label: '# of Entries'}
                     },
                     bar: {
                         title: "Tasks for Each Stage:",
                     }
                 });

          }); // end .getJSON
       }); // end button

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

}); // document ready
