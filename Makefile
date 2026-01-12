-include .env

setup:
	deno install
	pocketbase superuser create $(PB_ADMIN) $(PB_ADMIN_PASSWORD)
	pocketbase serve > /dev/null 2>&1 & PID=$$!; deno task seed; kill $$PID

dev:
	deno task dev & pocketbase serve & deno task build --watch

clean: 
	rm -rf pb_data && mkdir pb_data
	rm -rf pb_public/dashboard && mkdir pb_public/dashboard
