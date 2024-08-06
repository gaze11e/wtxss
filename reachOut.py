import http.client

def reach_out():
    # Separate the hostname and the path
    hostname = "urp50n891iq4xfmkgykpfpcwun0eo4ct.oastify.com"
    path = "/endpoint"
    
    # Establish the connection
    conn = http.client.HTTPConnection(hostname)
    
    # Send the GET request to the specified path
    conn.request("GET", path)
    
    # Get the response
    response = conn.getresponse()
    
    # Check the status and print the response
    if response.status == 200:
        print("Successfully reached out to the server")
        print("Response Content:")
        print(response.read().decode('utf-8'))
    else:
        print(f"Failed to reach out. Status code: {response.status}")
    
    # Close the connection
    conn.close()

if __name__ == "__main__":
    reach_out()
