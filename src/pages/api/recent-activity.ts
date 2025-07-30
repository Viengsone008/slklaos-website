import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('activity')
    .select('id, action, user, time, icon, color, entity_type, entity_id, details')
    .order('time', { ascending: false })
    .limit(10);

  if (error) {
    console.error(error);
    return res.status(500).json([]);
  }

  res.status(200).json(data);
}