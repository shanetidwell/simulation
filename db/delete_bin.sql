UPDATE bins 
set item_name = null,
     item_price = null
where bin_id = $1;

Select * From bins
where bin_id = $1