```javascript
// src/config/security.js

// 🔐 Security Configuration
export const SECURITY_CONFIG = {
  // Encryption settings
    encryption: {
        algorithm: 'AES-256-GCM',
            keyDerivation: 'PBKDF2',
                iterations: 100000,
                    saltLength: 32,
                        ivLength: 16
                          },

                            // Session management
                              session: {
                                  timeout: 300000, // 5 منٹ (300,000 ms)
                                      maxAttempts: 3,
                                          lockoutTime: 900000, // 15 منٹ
                                              autoLock: true
                                                },

                                                  // Password requirements
                                                    password: {
                                                        minLength: 8,
                                                            requireUppercase: true,
                                                                requireLowercase: true,
                                                                    requireNumbers: true,
                                                                        requireSymbols: true,
                                                                            maxAttempts: 5
                                                                              },

                                                                                // PIN settings
                                                                                  pin: {
                                                                                      length: 6,
                                                                                          maxAttempts: 3,
                                                                                              timeout: 30000 // 30 سیکنڈ
                                                                                                },

                                                                                                  // Backup settings
                                                                                                    backup: {
                                                                                                        reminderInterval: 86400000, // 24 گھنٹے
                                                                                                            autoBackup: false,
                                                                                                                encryptBackups: true
                                                                                                                  }
                                                                                                                  };

                                                                                                                  // 🚨 Security Messages
                                                                                                                  export const SECURITY_MESSAGES = {
                                                                                                                    WALLET_LOCKED: 'متعدد ناکام کوششوں کی وجہ سے wallet مقفل ہو گیا',
                                                                                                                      INVALID_PASSWORD: 'غلط پاس ورڈ۔ دوبارہ کوشش کریں۔',
                                                                                                                        WEAK_PASSWORD: 'پاس ورڈ سیکیورٹی کی شرائط پوری نہیں کرتا',
                                                                                                                          SESSION_EXPIRED: 'سیشن ختم ہو گیا۔ برائے کرم اپنا wallet کھولیں۔',
                                                                                                                            BACKUP_REQUIRED: 'برائے کرم سیکیورٹی کے لیے اپنا wallet backup کریں',
                                                                                                                              MNEMONIC_WARNING: 'اپنا recovery phrase کبھی کسی کے ساتھ شیئر نہ کریں!'
                                                                                                                              };

                                                                                                                              // 🛡️ Security Validation Functions
                                                                                                                              export const SecurityValidator = {
                                                                                                                                // Password strength check
                                                                                                                                  validatePassword(password) {
                                                                                                                                      const config = SECURITY_CONFIG.password;
                                                                                                                                          const checks = {
                                                                                                                                                length: password.length >= config.minLength,
                                                                                                                                                      uppercase: config.requireUppercase ? /[A-Z]/.test(password) : true,
                                                                                                                                                            lowercase: config.requireLowercase ? /[a-z]/.test(password) : true,
                                                                                                                                                                  numbers: config.requireNumbers ? /\d/.test(password) : true,
                                                                                                                                                                        symbols: config.requireSymbols ? /[!@#$%^&*(),.?":{}|<>]/.test(password) : true
                                                                                                                                                                            };

                                                                                                                                                                                const isValid = Object.values(checks).every(check => check === true);
                                                                                                                                                                                    return { isValid, checks };
                                                                                                                                                                                      },

                                                                                                                                                                                        // PIN validation
                                                                                                                                                                                          validatePIN(pin) {
                                                                                                                                                                                              const config = SECURITY_CONFIG.pin;
                                                                                                                                                                                                  return {
                                                                                                                                                                                                        isValid: pin.length === config.length && /^\d+$/.test(pin),
                                                                                                                                                                                                              length: pin.length === config.length,
                                                                                                                                                                                                                    numeric: /^\d+$/.test(pin)
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                          },

                                                                                                                                                                                                                            // Mnemonic validation
                                                                                                                                                                                                                              validateMnemonic(mnemonic) {
                                                                                                                                                                                                                                  const words = mnemonic.trim().split(/\s+/);
                                                                                                                                                                                                                                      return {
                                                                                                                                                                                                                                            isValid: words.length === 12 || words.length === 24,
                                                                                                                                                                                                                                                  wordCount: words.length,
                                                                                                                                                                                                                                                        expectedCount: [12, 24]
                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                              };

                                                                                                                                                                                                                                                              export default SECURITY_CONFIG;
                                                                                                                                                                                                                                                              ```