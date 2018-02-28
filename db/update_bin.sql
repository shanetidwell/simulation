UPDATE bins 
set item_name = $2,
     item_price = $3
where bin_id = $1;

Select * From bins
where bin_id = $1;