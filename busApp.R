library(httr)
library(magrittr)
library(purrr)
library(stringr)
route <- "939"

GET(glue::glue("https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/NewTaipei/{route}?$top=30&$format=JSON")) %>%
  content -> estimatedArrivalTime_916

GET(glue::glue("https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/NewTaipei/{route}?$top=30&$format=JSON")) %>%
  content -> route_916

查不同route, GET的網址要更著改喔，可用：
```
route <- "939"

GET(glue::glue("https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/NewTaipei/{route}?$top=30&$format=JSON")) %>%
  content -> estimatedArrivalTime

GET(glue::glue("https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/NewTaipei/{route}?$top=30&$format=JSON")) %>%
  content -> routeInfo
```