<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp' );

/** MySQL database username */
define( 'DB_USER', 'wp' );

/** MySQL database password */
define( 'DB_PASSWORD', 'secret' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~2}dZFG&%TUgYO^iCpL>6A>SlhBDx=lwp_!R%*%`sdr.]+Y*pa*qPMjY!/nZWL>s' );
define( 'SECURE_AUTH_KEY',  '*:?^0=oZ8Bq6=fu0Q[[6<W|>]:x5b6$;-~9#&H,!JJ)Q^s_djON,rIApr#f&l+e)' );
define( 'LOGGED_IN_KEY',    '8@^|4g9t!3g=,> :2m/n:o|N5o!dZ:hev1PgJEEjc,(i#Wx{+hp!tM2zqt]2V``Z' );
define( 'NONCE_KEY',        'p: ^Cf>&Le>qnxA=[0gMTROkR@6350T6w0wS? /Ewh$3j:4k(4.VW2Z/6d/bv|Jf' );
define( 'AUTH_SALT',        '_Xb+^;xek]a-[7hc.^AjFFzKLGH_KW9UFj=RQ&M}P &1[?c_--l{2i-{^zI}r>>v' );
define( 'SECURE_AUTH_SALT', '/]/]=24qog&6bN6[487$y.:-2SPzP2?`9))+|2:=ru`%N8?T--yEd|^=7H2o(Jd/' );
define( 'LOGGED_IN_SALT',   'mfwUFby`gaS2r;I]683!)d`/>rXXT<,Ci8ddFy!!beI(;n/V}!F][1[UFJ1U%=k8' );
define( 'NONCE_SALT',       'v.=^~`At1cK8S6m5c$XfXc-u=f04L>x}V#;u0#RscW&EpN6UqNxjX`VWhT<eqsqu' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
