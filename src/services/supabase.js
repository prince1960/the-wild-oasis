
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rzcimgygwemvhmfewpez.supabase.co'
const supabaseKey = "sb_publishable_dsDhNcrKIDo2mCTjXuUg7g_K0cWhcG0"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
