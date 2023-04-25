# Use an official Python runtime as a parent image
FROM python:3.10

# Set the working directory to /app
WORKDIR /app

# Add a new group and user for security purposes
RUN groupadd --system appgroup && \
    useradd --system --create-home --gid appgroup appuser

# Copy the current directory contents into the container at /app
COPY . /app

# Set the environment variable for the database username
ENV DATABASE_USERNAME postgres

# Copy the requirements.txt file to the container at /app
COPY mms_app_backend/requirements.txt /app

# Install any needed packages specified in requirements.txt
RUN pip3 install -r requirements.txt

# Set the new user as the default user for better security
USER appuser

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable for application name
ENV NAME World

# Run the FastAPI application using uvicorn when the container launches
CMD ["uvicorn", "mms_app_backend.main:app", "--host", "0.0.0.0", "--port", "8080"]
