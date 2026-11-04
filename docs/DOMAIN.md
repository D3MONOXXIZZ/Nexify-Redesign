# Connect nexifyconcepts.store to Vercel

## 1. Deploy on Vercel (if not already)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import **Mushaf2003/Nexify-Concepts**
3. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://www.nexifyconcepts.store`
4. Deploy

## 2. Add domain in Vercel

1. Open your project → **Settings** → **Domains**
2. Add **`nexifyconcepts.store`** (apex)
3. Add **`www.nexifyconcepts.store`** — set as **primary** domain in Vercel (apex redirects to www)

Vercel will show the DNS records you need.

## 3. Configure DNS at your registrar

Where you bought **nexifyconcepts.store** (e.g. Namecheap, GoDaddy, Cloudflare), add:

### Apex domain (`nexifyconcepts.store`)

| Type | Name / Host | Value |
|------|-------------|--------|
| **A** | `@` | `76.76.21.21` |

### WWW subdomain (`www.nexifyconcepts.store`)

| Type | Name / Host | Value |
|------|-------------|--------|
| **CNAME** | `www` | `cname.vercel-dns.com` |

> If your registrar does not support apex A records, use Vercel **nameservers** instead (shown in the Domains tab).

### Optional: use Vercel nameservers (simplest)

At your registrar, replace nameservers with the two Vercel provides (e.g. `ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Vercel then manages all DNS.

## 4. SSL & verification

- SSL is automatic once DNS propagates (usually 5–60 minutes, up to 48h).
- In Vercel **Domains**, status should change to **Valid Configuration**.

## 5. Verify

- https://nexifyconcepts.store — site loads
- https://www.nexifyconcepts.store — redirects to apex
- Check sitemap: https://nexifyconcepts.store/sitemap.xml

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Domain stuck on “Pending” | Wait for DNS propagation; confirm A/CNAME values |
| Wrong site shown | Ensure domain is assigned to the **Nexify-Concepts** project |
| SEO shows old URL | Redeploy after setting `NEXT_PUBLIC_SITE_URL` |
