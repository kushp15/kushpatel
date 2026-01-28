# AI Security Vulnerability Scanner Portfolio

Your portfolio now includes a **real, working AI-powered Security Vulnerability Scanner** that analyzes code for security vulnerabilities.

## What It Does

Visitors can paste code and get instant analysis:
- ✅ Detects SQL Injection, Command Injection, Hardcoded Credentials
- ✅ Identifies weak cryptography and insecure deserialization
- ✅ Shows severity levels (CRITICAL, HIGH, MEDIUM, LOW)
- ✅ Provides fix recommendations
- ✅ Calculates risk score (0-100)
- ✅ References CWE vulnerability IDs

## Quick Start (5 Minutes)

### Local Testing
```bash
# 1. Install dependencies
cd api
pip install -r requirements.txt

# 2. Start backend
python vulnerability_scanner.py

# 3. In new terminal, start website
cd ..
python -m http.server 8000

# 4. Open in browser
# http://localhost:8000
# Go to Scanner section, paste code, click "Analyze Code"
```

**See SETUP.md for detailed testing guide with troubleshooting.**

## What You Have

```
✅ Backend: Python Flask API (api/vulnerability_scanner.py)
✅ Frontend: Scanner UI integrated into website (index.html)
✅ Docker: Container config for cloud (Dockerfile)
✅ Docs: Setup guide (SETUP.md)
```

## Files

- `index.html` - Your website with Scanner section
- `api/vulnerability_scanner.py` - Backend AI agent (290 lines)
- `api/requirements.txt` - Python dependencies
- `Dockerfile` - For cloud deployment
- `SETUP.md` - Complete setup & testing guide

## Architecture

```
Browser (Your Website)
    ↓ (User pastes code)
Python Flask Backend
    ↓ (Analyzes with AI + patterns)
Returns Vulnerabilities
    ↓ (Displays in browser)
Beautiful Results with Fixes
```

## Vulnerabilities Detected

| Type | Severity |
|------|----------|
| SQL Injection | CRITICAL |
| Command Injection | CRITICAL |
| Hardcoded Credentials | CRITICAL |
| Weak Cryptography | HIGH |
| Insecure Deserialization | HIGH |
| Path Traversal | HIGH |
| XSS Vulnerabilities | HIGH |
| Debug Mode | MEDIUM |

## Test Cases

Try these to verify it works:

**Hardcoded Credentials:**
```python
api_key = "sk-1234567890"
password = "secret123"
```

**SQL Injection:**
```python
query = "SELECT * FROM users WHERE id = '" + user_input + "'"
```

**Command Injection:**
```python
import os
os.system(f"rm {user_file}")
```

## Production Deployment

After local testing works perfectly:

1. **Deploy Backend** to Hugging Face Spaces / Railway / Render
2. **Update API_URL** in index.html with deployed backend URL
3. **Deploy Website** to Vercel: `git push origin main`

See SETUP.md for detailed local testing first.

## What This Shows Recruiters

- 🧠 AI/ML integration skills
- 🔐 Security knowledge (CWE/OWASP)
- 🏗️ Full-stack development
- 🚀 Cloud deployment capability
- 💻 Backend API design
- 🎨 Frontend-backend integration

## Next Steps

1. **Read:** SETUP.md (testing guide)
2. **Install:** `pip install -r api/requirements.txt`
3. **Run:** `python api/vulnerability_scanner.py`
4. **Test:** Open `index.html` → Scanner section
5. **Deploy:** Follow SETUP.md deployment section

---

**Status:** Ready to test & deploy  
**Local Setup Time:** 5 minutes  
**Test First:** Yes (see SETUP.md)