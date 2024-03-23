
# Paths
FRONTEND_DIR := client
BACKEND_DIR := backend
STATIC_DIR := ${BACKEND_DIR}/static

.PHONY: run build test clean

# React Frontend
run-frontend:
	@echo "Starting frontend..."
	@cd ${FRONTEND_DIR} && npm install && npm start

build-frontend:
	@echo "Building frontend..."
	@cd ${FRONTEND_DIR} && npm install && npm run build
	@mkdir -p ${STATIC_DIR}
	@cp -r ${FRONTEND_DIR}/build/* ${STATIC_DIR}

test-frontend:
	@echo "Testing frontend..."
	@cd ${FRONTEND_DIR} && npm install && npm run build

clean-frontend:
	@echo "Cleaning frontend..."
	@cd ${FRONTEND_DIR} && rm -rf build && npm ci

# Rust Backend
run-backend:
	@echo "Starting backend..."
	@cd ${BACKEND_DIR} && cargo run

build-backend:
	@echo "Building backend..."
	@cd ${BACKEND_DIR} && cargo build

build-backend-release:
	@echo "Building backend (release)..."
	@cd ${BACKEND_DIR} && cargo build

test-backend:
	@echo "Testing backend..."
	@cd ${BACKEND_DIR} && cargo test

clean-backend:
	@echo "Cleaning backend..."
	@cd ${BACKEND_DIR} && cargo clean

# Both
run: build-frontend run-backend
test: test-backend test-frontend
clean: clean-frontend clean-backend
build: build-frontend build-backend
build-release: build-frontend build-backend-release
