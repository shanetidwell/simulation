SELECT bin_id, bin_name, bins.shelf_id, item_name, item_price, name as shelf_name from bins 
left JOIN shelf
ON bins.shelf_id = shelf.shelf_id
where bins.shelf_id = $1
order by bin_id
