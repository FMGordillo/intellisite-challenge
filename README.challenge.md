# Fullstack Challenge

For this challenge we will be working on one of our product's output, in charge of reporting traffic anomalies.
Given the JSON file with a list of events generated by the Vehicle Recognition AI module. You have to build a microservice that provides:

- A  command line interface (CLI) that allows you to fill in a database.
- Create an REST API with two GET endpoints:
  - **/api/anomalies:** returns a list of all the generated anomalies.
  - **/api/anomalies/csvfile:** returns a CSV file with the following stats, grouped by date and time:
    - Count of objects that crossed the **checkpoint_name** named *countingLine*
    - Count of each type of anomaly.

    Columns:
      - Date
      - Day of Week
      - Hour
      - Camera
      - Car Count
      - Bus Count
      - Motorbike Count
      - Truck Count
      - Bicycle Count
      - Person Count
      - Traffic Congestion
      - Queue Clearing
      - Wrong Way
      - Unsafe Lane Entry
      - Stalled Car
      - Illegal Turn
      - Jay Walking

- Develop the frontend in React.js:
  - Create a view with a paged table that consumes from the endpoint **/api/anomalies**.

    Columns: 
      - Date
      - Day of Week
      - Hour
      - Camera
      - Instance
      - Anomalies
  
  - Add a download button to the previous view that allows you to download the stats through the **/api/anomalies/csvfile** endpoint.

Notes:

- You can choose NodeJS (preferably) or any Python Web Framework to develop the REST API.
  - Based on our current stack you can use the following Python libraries (optional):
    - [typer](https://typer.tiangolo.com/) or pyCLI for CLI development.
    - [fastAPI](https://fastapi.tiangolo.com/) for API REST development.
    - [elasticsearch](https://elasticsearch-py.readthedocs.io/en/master/) to manage elasticsearch db.
- You can choose any kind of database to persist the data.


You will deliver the code in a public repository at www.github.com.
The proposed solution must use Docker
The repo must include a `README.md` file with all the instalation instructions, along with the corresponding Dockerfiles.


Plus:

- Docker compose.
- Swagger.
- API authentication.