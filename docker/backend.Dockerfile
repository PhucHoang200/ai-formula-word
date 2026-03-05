FROM python:3.11

WORKDIR /app

RUN apt-get update && \
    apt-get install -y pandoc

COPY backend/requirements.txt .

RUN pip install -r requirements.txt

COPY backend /app

CMD ["uvicorn","app.main:app","--host","0.0.0.0","--port","8000"]